import Title from '@/components/Title';

export default function Home() {
  return (
    <div className="container w-[90%] mt-6" data-testid="main_container">
      <div className="mx-6">
        <Title
          title="VALKR"
          subtitle="Creating Simple Applications and Systems for Small Business Efficiency"
        />
        <div className="text-md text-yellow-100">
          We are here to create systems and applications that help make your business a
          prosperous endeavor. We want to remove the barriers in your path to help you
          succeed now and in the future.
        </div>
      </div>
    </div>
  );
}
