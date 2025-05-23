import connectDB from '@/app/lib/mongodb';
import Tournament from '@/app/models/tournament';

export async function GET(request: Request) {
    console.log( request );
    return new Response('Hello World', { status: 200 });
}

export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();

    if( !body.name ) return new Response('Name is required', { status: 400 });

    const result = await Tournament.create( new Tournament({
        name: body.name,
        description: body.description ?? '',
        date: body.date ?? new Date(),
        divisions: body.divisions ?? [ 'Default' ],
        rubricCategories: body.rubricCategories ?? ['Overall'],
        judges: body.judges
    }));

    return new Response(JSON.stringify(result), { status: 200 });
}