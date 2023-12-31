import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();
const auth = (req: Request) => ({
  id: "1",
});

export const fileRouter = {
  videoUploader: f({
    video: { maxFileSize: "512MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
    }),
} satisfies FileRouter;
export type OurFileRouter = typeof fileRouter;
