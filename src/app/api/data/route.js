import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

// Initialize the MongoClient with the database URI from environment variables
const client = new MongoClient(process.env.NEXT_PUBLIC_DB);



export async function GET() {
  try {

    const database = client.db("uidata");
    const datas = database.collection("data");

    const result = await datas.find({}).toArray();

    // Ping the database to confirm the connection is successful

    // Return a success response
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to connect to MongoDB", error);

    // Return an error response
    return NextResponse.json({ error: error.message });
  }
}
