
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-tight">
          Our Proven
          <br />
          <span className="text-gradient font-medium">Implementation Process</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From discovery to optimization, we follow a structured approach to ensure successful AI adoption in your legal practice.
        </p>
      </div>

      {/* Process Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className="glass rounded-xl p-6 text-center group hover:glass-hover transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Tabs */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <Tabs defaultValue={features[0].title} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left side - Tab triggers */}
            <div className="lg:col-span-5 space-y-3">
              <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                  >
                    <FeatureTab
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      isActive={false}
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Right side - Feature content */}
            <div className="lg:col-span-7">
              {features.map((feature) => (
                <TabsContent
                  key={feature.title}
                  value={feature.title}
                  className="mt-0 h-full"
                >
                  <div className="glass rounded-xl p-6 lg:p-8 h-full">
                    <h3 className="text-2xl font-semibold text-white mb-6">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
