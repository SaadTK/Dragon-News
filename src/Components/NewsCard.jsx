import React from "react";
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, details, thumbnail_url, rating, total_view } = news;

  // Fix: call the method to get the formatted date
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Header: Author info + Bookmark + Share */}
      <div className="bg-base-200 flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-500 hover:text-primary flex gap-2 cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-4">
        <h2 className="text-lg font-bold text-primary hover:underline cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={thumbnail_url}
          alt={title}
        />
      </div>

      {/* Details */}
      <div className="px-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-primary font-semibold cursor-pointer hover:underline ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer: Rating and Views */}
      <div className="px-4 py-3 mt-2 flex justify-between items-center text-sm text-gray-600 border-t">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span>{rating?.number || "N/A"}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
