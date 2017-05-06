# Publish Android aar library to jcenter

#### 1. Top-level build.gradle (Project Gradle)
 * `classpath 'com.jfrog.bintray.gradle:gradle-bintray-plugin:1.4'`  
 * `classpath 'com.github.dcendents:android-maven-gradle-plugin:1.3'`  
 * `mavenCentral()`

sample:

	buildscript {
    	repositories {
          mavenCentral()
          jcenter()
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:1.5.0'
          classpath 'com.jfrog.bintray.gradle:gradle-bintray-plugin:1.6'
          classpath 'com.github.dcendents:android-maven-gradle-plugin:1.3'
      }
	}
	allprojects {
      repositories {
          mavenCentral()
          jcenter()
      }
	}


#### 2. build.gradle in the module will be published

```
  apply plugin: 'com.github.dcendents.android-maven'
  apply plugin: 'com.jfrog.bintray'

  ext {
      bintrayRepo = 'REPLACE ME'
      bintrayName = 'REPLACE ME'

      publishedGroupId = 'REPLACE ME'
      artifact = 'REPLACE ME'

      siteUrl = 'REPLACE ME'
      gitUrl = 'REPLACE ME'

      libraryVersion = 'REPLACE ME'
      libraryName = 'REPLACE ME'
      libraryDescription = 'REPLACE ME'

      developerId = 'REPLACE ME'
      developerName = 'REPLACE ME'
      developerEmail = 'REPLACE ME'

      licenseName = 'The Apache Software License, Version 2.0'
      licenseUrl = 'http://www.apache.org/licenses/LICENSE-2.0.txt'
      allLicenses = ["Apache-2.0"]
  }
  apply from:'https://raw.githubusercontent.com/icaying/lab/master/android/jcenter/install.gradle'
  apply from:'https://raw.githubusercontent.com/icaiying/lab/master/android/jcenter/bintray.gradle'
```

#### 3. local.properties
* `bintray.apikey=********************`  
* `bintray.user=****`  

#### 4. type in console and run
`gradle bintrayupload`  

#### thanks
[https://github.com/Jude95/JCenter](https://github.com/Jude95/JCenter)
