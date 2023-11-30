"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModel } from "@/components/models/ConfirmModel";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublised: boolean;
}

export const Actions = ({
  disabled,
  courseId,
  isPublised,
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore()
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublised) {
        await axios.patch(
          `/api/courses/${courseId}/unpublish`
        );
        toast.success("Course unpublished");
      } else {
        await axios.patch(
          `/api/courses/${courseId}/publish`
        );
        toast.success("Course published");
        confetti.onOpen();
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`/api/courses/${courseId}`);
      toast.success("Course deleted");
      router.push(`/teacher/courses`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublised ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModel onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModel>
    </div>
  );
};
