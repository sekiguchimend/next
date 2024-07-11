// app/blog/[id]/layout.tsx

import Header from "@/app/comport/header";
import Footer from "@/app/comport/footer";
interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BlogLayout;
