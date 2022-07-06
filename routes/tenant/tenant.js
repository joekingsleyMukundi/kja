const express = require('express');
const { landing_page, about_page, blog_page, single_blog_page, coming_soon_page, compare_page, contact_page, error_page, faq_page, gallery_page, listings_page, shop_cart_page, shop_checkout_page, shop_order_page, shop_single_page, shop_page, single_listing_page, terms_page } = require('../../controllers/tenant/tenant_controllers');
const router = express.Router();

router.get('/', landing_page)
router.get('/about', about_page);
router.get('/blog', blog_page)
router.get('/single_blog', single_blog_page)
router.get('/coming_soon', coming_soon_page)
router.get('/compare', compare_page)
router.get('/contact', contact_page)
router.get('/error', error_page)
router.get('/faq', faq_page)
router.get('/gallery', gallery_page)
router.get('/listings', listings_page)
router.get('/cart', shop_cart_page)
router.get('/checkout', shop_checkout_page)
router.get('/order', shop_order_page)
router.get('/single_shop', shop_single_page)
router.get('/shop', shop_page)
router.get('/single_listing', single_listing_page)
router.get('/terms', terms_page)

module.exports = router;