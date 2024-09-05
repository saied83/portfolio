"use client";

export const scrollToById = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  window.scroll({
    top: element.offsetTop,
    behavior: "smooth",
  });
};
export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href=""
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            scrollToById("home");
          }}
        >
          Home
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollToById("project");
          }}
          className="nav-item"
        >
          Projects
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollToById("about");
          }}
          className="nav-item"
        >
          About
        </a>
        <a
          href=""
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          onClick={(e) => {
            e.preventDefault();
            scrollToById("contact");
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
