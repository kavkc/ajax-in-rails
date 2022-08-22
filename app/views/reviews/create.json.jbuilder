# two scenarios
# if the review is saved
if @review.persisted?
  # we want to render the form empty
  #  json.name_of _the_key
  json.my_form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: Review.new})
  # we want to render the review created to be inserted in the items
  json.my_inserted_item render(partial: "restaurants/review", formats: :html, locals: {review: @review})
# else
else
  # we want to render the form with validation errors
  json.form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: @review})
end
# end
