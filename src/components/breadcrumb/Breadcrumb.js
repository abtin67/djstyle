import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const pathToFarsi = {
  fcomponent: "زنانه",
  mcomponent: "مردانه",
  chcomponent: "بچه گانه",
  bcomponent: "زیبایی و سلامت",
  contact: "ارتباط با ما",
  about: "درباره ما",
  loginPage: "صفحه ورود",
  feminine: "محصولات زنانه",
  masculine: "مردانه",
  childish: "بچه گانه",
  beauty: "زیبایی و سلامت",
  shopping: "سبد خرید",
  mCloding: "لباس مردانه",
  mAccessory: "اکسسوری مردانه",
  mShoes: "کفش مردانه",
  mSport: "ورزشی مردانه",
  productChildish: "نوزادی",
  productGirlish: "دخترانه",
  boyish: "پسرانه",
  searchBox: "جستجو",
  products: "جزییات محصولات",
};

const Breadcrumb = ({ products = [] }) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // مدیریت صفحات محصول
      if (segment === 'products' && index < pathSegments.length - 1) {
        const nextSegment = pathSegments[index + 1];
        if (!isNaN(nextSegment)) {
          const productId = parseInt(nextSegment);
          const product = products.find(p => p.id === productId);
          breadcrumbs.push({
            path: `${currentPath}/${nextSegment}`,
            name: product ? product.name : 'جزییات محصول',
            isLast: true
          });
          // از حلقه خارج شو چون بعد از محصول چیزی نیست
          return;
        }
      }

      // نادیده گرفتن بخش‌های عددی (مثل ID محصول)
      if (!isNaN(segment)) return;

      // ترجمه بخش مسیر به فارسی
      let name = pathToFarsi[segment];
      if (!name) {
        name = segment
          .replace(/-/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

      breadcrumbs.push({
        path: currentPath,
        name,
        isLast
      });
    });

    setBreadcrumbs(breadcrumbs);
  }, [location, products]);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <i className="fas fa-home"></i> خانه
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li 
            key={`${breadcrumb.path}-${index}`}
            className={`breadcrumb-item ${breadcrumb.isLast ? 'active' : ''}`}
            aria-current={breadcrumb.isLast ? 'page' : undefined}
          >
            {breadcrumb.isLast ? (
              breadcrumb.name
            ) : (
              <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;