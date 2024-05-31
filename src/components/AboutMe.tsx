import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Хариуцлагатай, бүтээлч байх, шинэ зүйлсэд нээлттэй хурдтай суралцахыг ирмэлцдэг. 
Багаар ажиллах хамт олонтойгоо эрүүл харилцааг үүсгэх, үйл ажиллагаа зохион байгуулах оновчтой хуваарилж чиглүүлэх мөн амьдралын эрүүл хэв маягийг уриалах манлайлах чадвартай`;

export const AboutMe = () => {
  return (
    <div className=" lg:w-9/12">
      <TextGenerateEffect words={words} />
    </div>
  );
};
