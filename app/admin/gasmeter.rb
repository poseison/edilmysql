ActiveAdmin.register Gasmeter do;
  permit_params  :vslue, :gaslocation_id, :capturedate,  gaslocations_attrributes: [:gaslocation_id, :gaslocation_type]
menu :label => "Gas Meters"

active_admin_importable

csv do
  column :capturedate
  column :vslue
end
  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  
end
