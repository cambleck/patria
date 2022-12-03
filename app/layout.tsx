import "../styles/globals.css";
import { User } from "../typings";
import Header from "./Header";

let date: Date = new Date();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = {
    id: "asdfasdf",
    name: "asdfasdf",
    password: "asdfasdf",
    email: "asdfasdf",
    date: date,
  };
  console.log(user);
  return (
    <html>
      <head />
      <body>
        <Header {...user} />
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
