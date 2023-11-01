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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('image', 255)->nullable();
            $table->string('name', 255);
            $table->longText('about')->nullable();
            $table->string('designation', 255)->nullable();
            $table->longText('description')->nullable();
            $table->string('phone', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('linkedin_link', 355)->nullable();
            $table->integer('series')->nullable();
            $table->boolean('status')->default(1);
            $table->boolean('is_home')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
