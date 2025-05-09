import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")
    //if the handle is already claimed you can not the claimed bittree
    const doc = await collection.findOne({handle:body.handle})
    if(doc){
      return  Response.json({ success:false , error:true  ,message: 'you cant claimed the linktree because handle is already exits try anothe handle' })
    }
    const result = await collection.insertOne(body)
    return Response.json({ success:true , error:false ,result:result ,message: 'your linktree has been generated enjoy yourself!' })
  }