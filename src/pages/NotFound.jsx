import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";

function NotFound() {
  return (
    <section className="not-found pt-0 pb-30">
      <h1 className="text-[200px] text-center font-black">404</h1>
      <div className="flex flex-col justify-center items-center gap-0">
        <Heading heading="Page Not Found" />
        <Paragraph description="Sorry, the page you are looking for does not exist." />
        <Button title="Go Back Home" link="/" />
      </div>
    </section>
  );
}

export default NotFound;
