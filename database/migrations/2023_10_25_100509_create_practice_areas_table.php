<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('practice_areas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('thumnail_image', 255)->nullable();
            $table->string('alt_thumnail_image', 255)->nullable();
            $table->string('section_image', 255)->nullable();
            $table->string('alt_section_image', 255)->nullable();
            $table->string('title', 355);
            $table->string('slug')->unique();
            $table->longText('short_description')->nullable();
            $table->longText('content');
            $table->longText('focus_area')->nullable();
            $table->longText('why_choose_us')->nullable();
            $table->longText('faq')->nullable();
            $table->text('meta_title')->nullable();
            $table->longText('meta_description')->nullable();
            $table->string('breadcrumb_title', 255)->nullable();
            $table->string('breadcrumb_subtitle', 255)->nullable();
            $table->string('breadcrumb_image', 255)->nullable();
            $table->boolean('status')->default(1);
            $table->integer('series')->nullable();
            $table->boolean('is_home')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('practice_areas');
    }
};
