export const scrollToView = (ref: any) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
