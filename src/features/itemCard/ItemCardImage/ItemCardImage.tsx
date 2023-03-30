import { Image } from './ItemCardImage.style';

interface IItemCardImage {
  image: string | undefined;
}

function ItemCardImage(props: IItemCardImage) {
  const image = props.image;

  return (
    <Image>
      <img src={image} alt='image' />
    </Image>
  );
}
export default ItemCardImage;
