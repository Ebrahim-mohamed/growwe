import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProfileTabs() {
  return (
    <div className="flex w-full flex-col gap-6 items-center justify-center pb-[var(--section-Padding)]">
      <Tabs defaultValue="account" className="text-[1.5rem] ">
        <TabsList className="w-full h-full">
          <TabsTrigger
            value="personal"
            className="text-[1.5rem] min-w-[20rem] cursor-pointer"
          >
            Your personal data
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="text-[1.5rem] min-w-[20rem] cursor-pointer"
          >
            Your orders
          </TabsTrigger>
        </TabsList>
        <TabsContent value="personal" className="p-[1.5rem]">
          <p className="text-center text-[2rem]">No personal data</p>
        </TabsContent>
        <TabsContent value="orders" className="p-[1.5rem]">
          <p className="text-center text-[2rem]">No orders yet</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
