import Heading from "./heading";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
      <Heading />
      <StudentInfo />
      <p>These are the demos for week 2</p>
      <ul>
        <li>
          <Link href="/week-2">Week 2</Link>
        </li>
      </ul>
    </main>
  );
}
