"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";

export function DeleteDestination({ destination }) {
  const { destinationName, _id } = destination;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = res.json();
    redirect('/destinations')
    toast.warning("destination deleted successful")
  };
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className={"rounded-none text-red-500 flex items-center gap-1"}
      >
        <TrashBin></TrashBin>Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
