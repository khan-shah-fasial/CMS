<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PracticeArea;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\User;
use App\Models\Team;
use App\Models\Faq;
use App\Models\Contact;
use App\Models\BlogComment;
use App\Models\MediaCoverage;
use App\Models\Publication;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Response;
use Illuminate\Support\Str;



class SitemapController extends Controller
{


    public function newSitemap() {
        $otherUrls = [
            url('/area-of-practices'),
            url('/blog'),
            url('/news'),
            url('/deal-update'),
            url('/publication'),
            url('/media-coverage'),
            url('/team-members'),
            url('/career'),
            url('/about-us'),
            url('/faq'),
        ];

        $practiceAreaUrls = $this->getPracticeAreaUrls(0);
        
        $practiceAreaUrls1 = $this->getPracticeAreaUrls(1);

        $practiceAreaUrls2 = $this->getPracticeAreaUrls(2);

        $practiceAreaUrls3 = $this->getPracticeAreaUrls(3);

        $blogsUrls = $this->getblogsUrls(3);

        $newsUrls = $this->getblogsUrls(4);

        $deal_updateUrls = $this->getblogsUrls(5);

        $uncategorizedUrls = $this->getblogsUrls(2);

        $teamsUrls = $this->getteamsUrls(1);

        //$my_file = '/home/bigdeals24x7/public_html/sitemap.xml';
        // Adjusted file path
        $directory = public_path('sitemap');
        $my_file = $directory . '/sitemap.xml';

        // Create directory if it doesn't exist
        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }
        $handle = fopen($my_file, 'w+');

        $sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemapContent .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

        $sitemapContent .= '
        <url>
            <loc>'.url('').'</loc>
            <lastmod>'.date('Y-m-d').'</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>';

        foreach ($otherUrls as $url) {
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>';
        }

        foreach ($practiceAreaUrls as $url) {
            $url = url('/area-of-practice/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>';
        }
        
        foreach ($practiceAreaUrls1 as $url) {
            $url = url('/specialised-services/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>';
        }
        
        foreach ($practiceAreaUrls2 as $url) {
            $url = url('/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>';
        }

        

        foreach ($practiceAreaUrls3 as $url) {
            $url = url('/area-of-practice/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>';
        }

        foreach ($blogsUrls as $url) {
            $url = url('/blog/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>';
        }

        foreach ($newsUrls as $url) {
            $url = url('/news/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>';
        }

        foreach ($deal_updateUrls as $url) {
            $url = url('/deal-update/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>';
        }
        
        foreach ($uncategorizedUrls as $url) {
            $url = url('/uncategorized/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>';
        }
        

        foreach ($teamsUrls as $url) {
            $url = url('/team-members/' . $url);
            $sitemapContent .= '
            <url>
                <loc>'.$url.'</loc>
                <lastmod>'.date('Y-m-d').'</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.4</priority>
            </url>';
        }


        $sitemapContent .= '</urlset>';

        fwrite($handle, $sitemapContent);
        fclose($handle);
        echo "<h2>Blog Sitemap Has Been Updated</h2>";

        // Output the sitemap content
        //return response($sitemapContent)->header('Content-Type', 'text/xml');
        //return response($sitemapContent);

        //header("Location: $my_file");
        //exit();
    }


    private function getPracticeAreaUrls($specialServiceType)
    {
        $practiceAreaUrls = [];
        $practiceAreas = PracticeArea::where(['status' => '1', 'special_service' => $specialServiceType])->get();

        foreach ($practiceAreas as $practiceArea) {
            $practiceAreaUrls[] = $practiceArea->slug;
        }

        return $practiceAreaUrls;
    }


    private function getblogsUrls($specialServiceType)
    {
        $blogsUrls = [];
        $blogs = Blog::where('status', 1)->whereJsonContains('blog_category_ids',
        ''.$specialServiceType.'')->get();

        foreach ($blogs as $blog) {
            $blogsUrls[] = $blog->slug;
        }

        return $blogsUrls;
    }

    private function getteamsUrls($specialServiceType)
    {
        $teamsUrls = [];
        $teams = Team::where('status', $specialServiceType)->get();

        foreach ($teams as $team) {
            $teamsUrls[] = strtolower(str_replace(' ', '-',$team->name));
        }

        return $teamsUrls;
    }
}