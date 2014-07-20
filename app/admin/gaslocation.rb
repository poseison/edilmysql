ActiveAdmin.register Gaslocation do
  permit_params  :address, :name, :longitude, :latitude, :gaslocation_type,:user_id, :gmaps, :user_type, users_attrributes: [:user_id, :name]
  menu :label => "Gas Meter Locations"
  active_admin_importable

  csv do
    column :address
  end
  
  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  
end
