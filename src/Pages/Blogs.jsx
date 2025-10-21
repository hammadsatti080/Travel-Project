import React, { useEffect } from 'react';
import Blog from '../Components/Distination/Blog';
import BlogFeature from '../Components/Blog/BlogFeature';
import BlogSidebar from '../Components/Blog/BlogSidebar';
import BlogCategories from '../Components/Blog/BlogCatagories';

export default function Blogs() {
  // ✅ Scroll to top when Blogs page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Blog />
      <BlogFeature />
      <BlogSidebar />
      <BlogCategories />
    </div>
  );
}
