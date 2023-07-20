const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer aria-labelledby="footer-heading" className="bg-base-100 bg-opacity-40">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <h3 className="text-sm font-medium text-base-content">Shop</h3>
                <ul className="mt-6 space-y-6">
                  {footerNavigation.shop.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-base-content text-opacity-80 hover:text-opacity-95"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-base-content">Company</h3>
                <ul className="mt-6 space-y-6">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-base-content text-opacity-80 hover:text-opacity-95"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <h3 className="text-sm font-medium text-base-content">Account</h3>
                <ul className="mt-6 space-y-6">
                  {footerNavigation.account.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-base-content text-opacity-80 hover:text-opacity-95"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-base-content">Connect</h3>
                <ul className="mt-6 space-y-6">
                  {footerNavigation.connect.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-base-content text-opacity-80 hover:text-opacity-95"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-16 xl:mt-0">
            <h3 className="text-sm font-medium text-base-content">
              Sign up for our newsletter
            </h3>
            <p className="mt-6 text-sm text-base-content text-opacity-75">
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form className="mt-2 flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="text"
                autoComplete="email"
                required
                className="w-full input input-primary input-bordered"
              />
              <div className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-base-100 py-10">
          <p className="text-sm text-base-content text-opacity-50">
            Copyright &copy; {year} Ilham Boilerplate, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
