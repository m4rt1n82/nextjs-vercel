
import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
        <h1> About Page</h1>
        <h1 className={'title'}>
          Go Back to home <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{" "}
          <code className={'code'}>pages/index.js</code>
        </p>
    </>
  );
}

AboutPage.getLayout = (page: JSX.Element) => (
  <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout></MainLayout>
);