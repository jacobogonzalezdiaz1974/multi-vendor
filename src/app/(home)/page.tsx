import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div className="">
          <Button variant='elevated'>Button</Button>
        </div>
        <div className="">
          <Input placeholder="Input" />
        </div>
        <div className="">
          <Progress value={50} />
        </div>
        <div className="">
          <Textarea value="Textarea" />
        </div>
        <div className="">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
