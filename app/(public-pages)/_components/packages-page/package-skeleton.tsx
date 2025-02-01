import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const OverViewSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-brand-color shadow-lg sm:shadow-2xl rounded-xl hover:shadow-xl sm:hover:shadow-3xl transition-shadow duration-300 p-4 sm:p-8">
      <motion.div className="flex flex-col gap-3 mb-6 sm:mb-8">
        <motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <Skeleton width={200} height={30} />
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="px-3 py-1 text-xs sm:text-sm font-medium">
              <Skeleton width={80} height={20} />
            </Badge>
            <Badge className="px-3 py-1 text-xs sm:text-sm font-medium">
              <Skeleton width={80} height={20} />
            </Badge>
          </div>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 p-1 bg-gray-100/80 rounded-lg w-full flex-nowrap gap-2">
          <TabsTrigger value="overview" className="flex-1 text-sm sm:text-base">
            <Skeleton width={100} height={20} />
          </TabsTrigger>
          <TabsTrigger value="pricing-details" className="flex-1 text-sm sm:text-base">
            <Skeleton width={120} height={20} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Skeleton count={3} />
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="VIP" className="w-full">
        <TabsList className="mb-6 p-1 bg-gray-100/80 rounded-lg md:w-2/5 xmd:w-4/6 flex-nowrap gap-4">
          <TabsTrigger value="VIP" className="flex-1 text-sm sm:text-base">
            <Skeleton width={60} height={20} />
          </TabsTrigger>
          <TabsTrigger value="DELUXE" className="flex-1 text-sm sm:text-base">
            <Skeleton width={80} height={20} />
          </TabsTrigger>
          <TabsTrigger value="REGULAR" className="flex-1 text-sm sm:text-base">
            <Skeleton width={90} height={20} />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Card>
  );
};

export default OverViewSkeleton;
