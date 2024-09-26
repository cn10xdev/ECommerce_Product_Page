import background from "../../assets/backgrounds/mobile-background.jpg";

export const SmallScreenNavBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.2]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={1000}
          alt="Background"
        />
      </div>
    </div>
  );
};
