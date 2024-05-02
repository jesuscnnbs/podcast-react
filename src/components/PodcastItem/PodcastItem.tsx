import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  title?: string;
  author?: string;
  imageUrl?: StaticImport | string;
}

const PodcastItem = ({
  title = "Podcast Title",
  author = "Jhon Doe",
  imageUrl = "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
}: Props) => {
  return (
    <div className="card">
      <Image src={imageUrl} width={170} height={170} alt={`${author} image`} />
      <div className="container">
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default PodcastItem;
