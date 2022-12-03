import Link from "next/link";
import React from "react";
import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "instagram",
  password: "",
});

async function getPosts() {
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM posts");
  console.log(result);
  client.release();
  return result.rows;
}

export default async function HomePage() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <div>
      <article className="prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
}
