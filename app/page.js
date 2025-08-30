import Title from '@/components/Title';

export default function Home() {
  return (
    <div className="container w-[90%] mx-12 mt-6" data-testid="main_container">
      <div className="mx-12">
        <Title
          title="VALKR"
          subtitle="Simple Toolsets for Rapid Next.js Development"
        />
        <div className="text-md text-yellow-100">
          <p className="py-3">
            In its current form, Next.js does an incredible job of laying the
            groundwork for simple websites and uncomplicated CRUD applications.
            However, it does not have a suite of tools that most application
            developers need righ out of the box for almost any application.
            Authentication? Need a third-party plugin or roll your own. Emails?
            The same thing... Want to add in some products, services, posts,
            or other resources, roll your own. There is no standard for these
            often mandatory services, resources, or helpers. I continously
            find myself building out these things for each application that I
            build on top of Next.js. While this is fine to do a few times,
            it leads me to believe that if these items were all provided as a
            simple, standard library which is coupled with Next.js- life would be
            much easier. So I seek to build on top of the framework that Vercel has
            pioneered. I do not seek to add complexity or mandatory bloat to the
            package, rather, I seek to provide the tools that will help people
            build rapidly on top of Next.js that engineers consistently need.
          </p>
          <p className="py-3">
            I hope to provide generators, and add-ins that will provide value and
            can be chosen by developers to include or not easily. VALKR wants to
            provide a layer of software on top of the base Next.js codebase, if
            it is required.
          </p>
          <p className="py-3">
            The following is a prioritized list of things which will be added to
            the VALKR suite.
          </p>
          <ul>
            <li className="first-list-item">Point of Contact Messengers:
              <ul>
                <li>Transactional Emails</li>
                <li>Text Messaging API</li>
              </ul>
            </li>
            <li className="first-list-item">Managed Resources:
              <ul>
                <li>Posts</li>
                <li>Products</li>
                <li>Appointments</li>
                <li>Etc..</li>
              </ul>
            </li>
            <li className="first-list-item">Account Management:
              <ul>
                <li>Administrative Accounts</li>
                <li>User Profiles/Accounts</li>
              </ul>
            </li>
            <li className="first-list-item">Background System & Public Dashboards for:
              <ul>
                <li>User Profiles</li>
                <li>Sales Reports</li>
                <li>Resource Management</li>
                <li>Administrative Functionality</li>
                <li>Account Overviews</li>
              </ul>
            </li>
            <li className="first-list-item">Media Integrations:
              <ul>
                <li>Image</li>
                <li>Video</li>
                <li>Audio</li>
              </ul>
            </li>
            <li className="first-list-item">SEO Optimizations</li>
            <li className="first-list-item">Rich Text Editor</li>
            <li className="first-list-item">Notifications & Alert Systems</li>
            <li className="first-list-item">Content Tagging</li>
            <li className="first-list-item">Pagination Systems</li>
            <li>&nbsp;</li>
          </ul>
          <p>
            Each one of these tools will be able to be implemented on-demand,
            pick and choose what you need, leave the rest. VALKR seeks to
            create a set of tools that simplifies the Next.js devs life while
            keeping these tools design nuetral with exceptional formatting
            and easy inclusion as Next.js application extensions that are
            designed to easily meet your demands.
          </p>
        </div>
      </div>
    </div>
  );
}
