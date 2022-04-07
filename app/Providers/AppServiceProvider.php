<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Item\ItemRepository;
use App\Repositories\Item\ItemRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ItemRepositoryInterface::class, ItemRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
