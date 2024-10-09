

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-800 to-slate-500 text-white text-center h-60 py-4 flex justify-center items-center flex-col font-bold font-raleway tracking-wide">
      <div className="text-[20px] font-bold">Thank You!</div>
      <p className="text-[20px]">
        &copy; {new Date().getFullYear()} Raeven Villarel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
