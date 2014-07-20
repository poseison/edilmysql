# -*- encoding: utf-8 -*-
# stub: morrisjs-rails 0.5.0 ruby lib

Gem::Specification.new do |s|
  s.name = "morrisjs-rails"
  s.version = "0.5.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["beanie"]
  s.date = "2014-03-20"
  s.description = "morris.js for the Rails Asset Pipeline"
  s.email = ["ich@abwesend.com"]
  s.homepage = "https://github.com/beanieboi/morrisjs-rails"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "morris.js for the Rails Asset Pipeline"

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, ["< 5", "> 3.1"])
    else
      s.add_dependency(%q<railties>, ["< 5", "> 3.1"])
    end
  else
    s.add_dependency(%q<railties>, ["< 5", "> 3.1"])
  end
end
