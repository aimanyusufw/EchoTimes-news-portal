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
        Schema::create('advertisements', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('type');
            $table->integer('media_path')->nullable();
            $table->text('embeded_code')->nullable();
            $table->string('redirect_url')->nullable();
            $table->string('location');
            $table->string('dimensions')->nullable();
            $table->integer('priority')->default(0);
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->integer('max_impressions')->nullable();
            $table->integer('max_views_per_user')->nullable();
            $table->bigInteger('clicks')->default(0);
            $table->bigInteger('impressions')->default(0);
            $table->string('advertiser_name')->nullable();
            $table->string('advertiser_email')->nullable();
            $table->string('advertiser_phone')->nullable();
            $table->dateTime('deleted_at')->nullable();
            $table->enum('status', ['active', 'inactive', 'pending'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('advertisements');
    }
};
