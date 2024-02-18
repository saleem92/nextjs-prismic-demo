import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.heading}
      <PrismicImage field={slice.primary.image} width={100} height={100}/>
    </section>
  );
};

export default Hero;
