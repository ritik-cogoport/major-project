import React from "react";
import Newsletter from "./newsletter";
import blog from '../assets/blog-image-3.svg'
const BlogDescription = () => {
  return (
    <div className="bg-white gap-12 pb-16 pl-4 pr-4 flex flex-col items-center justify-center mx-6">
      {/* container  */}
      <div className="md:pr-[250px] md:pl-[250px]">
        {/* heading */}
        <div className="font-semibold text-2xl text-gray-900 mb-8">
          Introduction
        </div>
        {/* content  */}
        <div className="font-normal text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed
          ullam autem rerum? Dolor necessitatibus obcaecati commodi mollitia
          dicta inventore et cumque accusantium aliquid sed, eveniet assumenda
          beatae, facere tempora quis. Tempora veniam, enim eius ullam impedit
          iste quisquam debitis aspernatur ducimus assumenda dolor facilis
          perspiciatis vel. Voluptas recusandae hic, voluptatem odit quas
          quisquam minima esse incidunt, molestiae excepturi nulla itaque omnis
          quidem iure suscipit dolorem optio eligendi quibusdam tempore quis
          cumque obcaecati? Delectus distinctio quam natus omnis blanditiis nam
          voluptates rerum. Obcaecati doloribus dolorum blanditiis voluptatum.
          Praesentium incidunt reiciendis excepturi fuga, et consectetur sint
          corporis sit ab nulla a.
        </div>
        {/* space  */}
        <div className="bg-white h-5"></div>
        <div className="font-normal text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed
          ullam autem rerum? Dolor necessitatibus obcaecati commodi mollitia
          dicta inventore et cumque accusantium aliquid sed, eveniet assumenda
          beatae, facere tempora quis. Tempora veniam, enim eius ullam impedit
          iste quisquam debitis aspernatur ducimus assumenda dolor facilis
          perspiciatis vel. Voluptas recusandae hic, voluptatem odit quas
          quisquam minima esse incidunt, molestiae excepturi nulla itaque omnis
          quidem iure suscipit dolorem optio eligendi quibusdam tempore quis
          cumque obcaecati? Delectus distinctio quam natus omnis blanditiis nam
          voluptates rerum. Obcaecati doloribus dolorum blanditiis voluptatum.
          Praesentium incidunt reiciendis excepturi fuga, et consectetur sint
          corporis sit ab nulla a.
        </div>
        {/* image  */}
        <div className="flex items-center justify-center pt-10 pb-10">
            <img src={blog} alt="" className="w-[350px] h-[240px]" />
        </div>
        <div className="font-normal text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed
          ullam autem rerum? Dolor necessitatibus obcaecati commodi mollitia
          dicta inventore et cumque accusantium aliquid sed, eveniet assumenda
          beatae, facere tempora quis. Tempora veniam, enim eius ullam impedit
          iste quisquam debitis aspernatur ducimus assumenda dolor facilis
          perspiciatis vel. Voluptas recusandae hic, voluptatem odit quas
          quisquam minima esse incidunt, molestiae excepturi nulla itaque omnis
          quidem iure suscipit dolorem optio eligendi quibusdam tempore quis
          cumque obcaecati? Delectus distinctio quam natus omnis blanditiis nam
          voluptates rerum. Obcaecati doloribus dolorum blanditiis voluptatum.
          Praesentium incidunt reiciendis excepturi fuga, et consectetur sint
          corporis sit ab nulla a.
        </div>
        
        
        
      </div>
    </div>
  );
};

export default BlogDescription;
