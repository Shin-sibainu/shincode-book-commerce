import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// import S3 from "aws-sdk/clients/s3";

//https://zenn.dev/nino/books/30e21d37af73b5/viewer/post-form

//Upload image to AWS S3
export async function POST(request: Request) {
  const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION, S3_BUCKET_NAME } =
    process.env;

  const s3Client = new S3Client({
    region: REGION,
    credentials: {
      accessKeyId: ACCESS_KEY_ID || "",
      secretAccessKey: SECRET_ACCESS_KEY || "",
    },
  });

  // URLからファイル名を取得
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("filename");

  const formData = await request.formData();
  const file: any = formData.get("file");

  // File オブジェクトから Buffer に変換
  const buffer = Buffer.from(await file?.arrayBuffer());

  // アップロードパラメータの設定
  const uploadParams: any = {
    Bucket: S3_BUCKET_NAME,
    Key: fileName, //保存時の画像名
    Body: buffer, //input fileから取得
    ContentType: "image/png", // 適切なContentTypeを設定
    ACL: "public-read", // 公開読み取りアクセスを設定
  };

  try {
    //画像のアップロード
    const command = new PutObjectCommand(uploadParams);
    const uploadResult = await s3Client.send(command);
    console.log("Upload success:", uploadResult);
    const imageUrl = `https://${S3_BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`;
    return NextResponse.json({ imageUrl });
  } catch (err) {
    console.error(err);
    return NextResponse.json(err);
  }
}
