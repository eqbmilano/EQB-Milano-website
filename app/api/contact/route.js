export async function POST(request) {
  try {
    const data = await request.json();

    if (!data?.name || !data?.email || !data?.message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid payload" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
