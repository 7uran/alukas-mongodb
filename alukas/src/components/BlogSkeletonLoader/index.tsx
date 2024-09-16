
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const BlogSkeletonLoader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-4">
            <Skeleton width={200} height={30} />
            <Skeleton width={400} height={40} />
            <Skeleton width={300} height={20} />
            <div className="w-full flex items-center justify-center">
                <Skeleton width={1170} height={759} />
            </div>
            <Skeleton width={500} height={60} />
        </div>
    );
};

export default BlogSkeletonLoader;
