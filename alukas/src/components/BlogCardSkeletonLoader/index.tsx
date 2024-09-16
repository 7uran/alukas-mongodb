import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const BlogCardSkeletonLoader: React.FC = () => {
    return (
        <div className="animate-pulse flex flex-col flex-wrap items-center gap-4 p-4 w-60">
            <Skeleton height={160} width={256} />
            <div className="w-full">
                <Skeleton height={24} width="80%" />
                <Skeleton height={20} width="60%" />
            </div>
        </div>
    );
};

export default BlogCardSkeletonLoader;
