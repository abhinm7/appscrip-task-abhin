export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    next: { revalidate: 60 }
  });
  const data = await res.json();
  return Response.json(data);
}