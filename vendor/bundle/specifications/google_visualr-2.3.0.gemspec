# -*- encoding: utf-8 -*-
# stub: google_visualr 2.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "google_visualr"
  s.version = "2.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Winston Teo"]
  s.date = "2014-04-08"
  s.description = "This Ruby gem, GoogleVisualr, is a wrapper around the Google Chart Tools that allows anyone to create the same beautiful charts with just Ruby; you don't have to write any JavaScript at all."
  s.email = ["winston.yongwei+google_visualr@gmail.com"]
  s.homepage = "https://github.com/winston/google_visualr"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.2.2"
  s.summary = "A Ruby wrapper around the Google Chart Tools that allows anyone to create the same beautiful charts with just plain Ruby."

  s.installed_by_version = "2.2.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, [">= 1.3.5"])
      s.add_development_dependency(%q<rspec>, [">= 2.14.1"])
      s.add_development_dependency(%q<rails>, [">= 3.2"])
    else
      s.add_dependency(%q<bundler>, [">= 1.3.5"])
      s.add_dependency(%q<rspec>, [">= 2.14.1"])
      s.add_dependency(%q<rails>, [">= 3.2"])
    end
  else
    s.add_dependency(%q<bundler>, [">= 1.3.5"])
    s.add_dependency(%q<rspec>, [">= 2.14.1"])
    s.add_dependency(%q<rails>, [">= 3.2"])
  end
end
