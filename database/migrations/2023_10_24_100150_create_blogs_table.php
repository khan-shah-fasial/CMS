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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->longText('blog_category_ids');
            $table->string('title', 255);
            $table->string('slug', 191)->unique();
            $table->longText('short_description')->nullable();
            $table->string('main_image', 255)->nullable();
            $table->string('alt_main_image', 255)->nullable();
            $table->longText('content');
            $table->string('meta_title', 255)->nullable();
            $table->longText('meta_description')->nullable();
            $table->tinyInteger('status')->default(1); 
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
