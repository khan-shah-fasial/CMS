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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->longText('news_category_ids'); 
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('short_description')->nullable();
            $table->string('main_image');
            $table->longText('content');
            $table->string('meta_title')->nullable();
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
        Schema::dropIfExists('news');
    }
};
