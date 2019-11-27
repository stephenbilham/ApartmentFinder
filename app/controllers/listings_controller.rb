class ListingsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]
    def index
        listings = Listing.all
        render json: listings
    end
    def create
        listing = current_user.listings.create listing_params
        render json: listing, status:201
    end

    def listing_params
        params.require(:listing).permit(:address, :price)
    end
end
