import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { Category, Course, Purchase } from "@prisma/client";

type Chapter = {
  id: string;
};

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: Chapter[];
  purchases: Purchase[];
  progress: number | null;
};

type GetCourses = {
  userId: string;
  title?: string;
  categoryId: string;
};

export const getCourses = async ({
  userId,
  title,
  categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublised: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const coursesWithProgress: CourseWithProgressWithCategory[] =
      await Promise.all(
        courses.map(async (course: any) => {
          if (course.purchases.length === 0) {
            return {
              ...course,
              progress: null,
            };
          }
          const progressPercentage = await getProgress(userId, course.id);
          return {
            ...course,
            progress: progressPercentage,
          };
        })
      );
    return coursesWithProgress;
  } catch (error) {
    console.log("[GET_COURSE", error);
    return [];
  }
};
