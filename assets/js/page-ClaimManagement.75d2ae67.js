(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{705:function(e,i,a){"use strict";a.r(i);var o=a(1),t=Object(o.a)({},(function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("GriefDefender is a plugin that provides self-service region protection functionality, giving you additional options to fine tune aspects such as door, chest, and build permissions for users or groups of users! Below some basic instructions for claim management for more fine tuned control over your claims check out the "),a("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Flags",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flags page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("All the examples are with the defaults at the time of writing this in mind.")]),e._v(" "),a("h2",{attrs:{id:"claim-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claim-creation"}},[e._v("#")]),e._v(" Claim Creation")]),e._v(" "),a("p",[e._v("A player can create claims in two types of modes.")]),e._v(" "),a("h3",{attrs:{id:"_2d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2d"}},[e._v("#")]),e._v(" 2D")]),e._v(" "),a("p",[e._v("A 2D claim creates a claim by "),a("code",[e._v("AREA")]),e._v(" (X and Z). It creates the claim from bedrock (lowest block point) to sky (max Y level 255) in the world you are in. This mode is the most user friendly as it doesn't require the player to worry about block height or other players claiming above or below their claims. By default all players default to this mode unless the meta option "),a("code",[e._v("griefdefender.create-mode")]),e._v(" is set to a different mode."),a("br"),e._v("\nSee https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#claim-options for more info on claim options.")]),e._v(" "),a("h3",{attrs:{id:"_3d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3d"}},[e._v("#")]),e._v(" 3D")]),e._v(" "),a("p",[e._v("A 3D claim creates a claim by "),a("code",[e._v("VOLUME")]),e._v(" (X, Y, and Z). It is the same as 2D except it respects the block height from your selections. This mode is ideal perfect for subdivisions (child claims). For example, if you wanted to create a building with floors you could use this mode so the height is respected."),a("br"),e._v("\nNote: To switch to this mode, use the command "),a("code",[e._v("/cuboid")]),e._v(" or  "),a("code",[e._v("/gd cuboid")]),e._v(". To exit back to 2D mode, enter the same command.")]),e._v(" "),a("h3",{attrs:{id:"force-players-to-default-to-3d-on-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force-players-to-default-to-3d-on-login"}},[e._v("#")]),e._v(" Force players to default to 3D on login")]),e._v(" "),a("p",[e._v("If you want to force players to default to 3D claiming mode on login, set "),a("code",[e._v("griefdefender.create-mode")]),e._v(" to "),a("code",[e._v("VOLUME")]),e._v(" on a LP group or player."),a("br"),e._v("\nNote: This does not mean a player cannot switch modes, it just defaults them to what is set on login.")]),e._v(" "),a("p",[e._v("In order to start creating a claim, first make sure you are in the correct claiming mode (2D or 3D) then do one of the following")]),e._v(" "),a("ol",[a("li",[e._v("Switch to the claiming tool which by default is a "),a("code",[e._v("minecraft:golden_shovel")]),e._v("."),a("br"),e._v("\nOR")]),e._v(" "),a("li",[e._v("Switch to claiming mode by using command "),a("code",[e._v("/claim")]),e._v(" or "),a("code",[e._v("/claimmode")]),e._v("."),a("br"),e._v("\nNote: Claim mode requires no tools in hand.")])]),e._v(" "),a("p",[e._v("Claim mode has the following functionality")]),e._v(" "),a("ul",[a("li",[e._v("Left-click to inspect existing claims based on your mouse cursor. The first non-air block hit will be the claim it inspects.")]),e._v(" "),a("li",[e._v("Shift Left-click to scan for existing claims around you.")]),e._v(" "),a("li",[e._v("Right-click to create a new claim. This requires 2 block points to complete. If in 2D mode, simply select 2 points in a square format. If in 3D mode, do the same as 2D but block height will matter so choose the lowest and highest block position you want your claim to be.")])]),e._v(" "),a("p",[e._v("Once you have the proper claiming tool equipped or are in "),a("code",[e._v("/claimmode")]),e._v(" , it is time to decide what claim type you want to create.")]),e._v(" "),a("p",[e._v("There are four types of claims a user can create")]),e._v(" "),a("ol",[a("li",[e._v("Admin - Use "),a("code",[e._v("/adminclaims")]),e._v(" or "),a("code",[e._v("/gd mode admin")]),e._v(" to switch.")]),e._v(" "),a("li",[e._v("Basic - Use "),a("code",[e._v("/basicclaims")]),e._v(" or "),a("code",[e._v("/gd mode basic")]),e._v(" to switch.")]),e._v(" "),a("li",[e._v("Subdivision - Use "),a("code",[e._v("/subdivideclaims")]),e._v(" or "),a("code",[e._v("/gd mode subdivide")]),e._v(" to switch.")]),e._v(" "),a("li",[e._v("Town - Use "),a("code",[e._v("/townclaims")]),e._v(" or "),a("code",[e._v("/gd mode town")]),e._v(" to switch.")])]),e._v(" "),a("h3",{attrs:{id:"admin-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-claim"}},[e._v("#")]),e._v(" Admin Claim")]),e._v(" "),a("p",[e._v("An admin claim has the following capabilities")]),e._v(" "),a("ul",[a("li",[e._v("No size restrictions.")]),e._v(" "),a("li",[e._v("Does not cost anything to create.")]),e._v(" "),a("li",[e._v("Can be created around any existing claim.")]),e._v(" "),a("li",[e._v("Can rented.")]),e._v(" "),a("li",[e._v("Used by administrators only.")])]),e._v(" "),a("p",[e._v("Note: Use "),a("code",[e._v("/adminclaims")]),e._v(" or "),a("code",[e._v("/gd mode admin")]),e._v(" to switch to this claim type mode.")]),e._v(" "),a("h3",{attrs:{id:"basic-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-claim"}},[e._v("#")]),e._v(" Basic Claim")]),e._v(" "),a("p",[e._v("A basic claim has the following capabilities")]),e._v(" "),a("ul",[a("li",[e._v("5x5 size restriction in 2D mode. 5x5x5 size restriction in 3D mode.")]),e._v(" "),a("li",[e._v("Can be sold, rented, or transferred to another player.")]),e._v(" "),a("li",[e._v("Requires claim blocks.")])]),e._v(" "),a("p",[e._v("This is the default claim type mode when equipping the claiming tool (minecraft:golden_shovel)."),a("br"),e._v("\nNote: Use "),a("code",[e._v("/basicclaims")]),e._v(" or "),a("code",[e._v("/gd mode basic")]),e._v(" to switch to this claim type mode.")]),e._v(" "),a("h3",{attrs:{id:"subdivision-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subdivision-claim"}},[e._v("#")]),e._v(" Subdivision Claim")]),e._v(" "),a("p",[e._v("A subdivision claim has the following capabilities")]),e._v(" "),a("ul",[a("li",[e._v("1x1 size restriction in 2D mode. 1x1x1 size restriction in 3D mode.")]),e._v(" "),a("li",[e._v("Can be sold, rented, or transferred to another player.")]),e._v(" "),a("li",[e._v("Requires no claim blocks when created by owner.")])]),e._v(" "),a("h3",{attrs:{id:"town-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#town-claim"}},[e._v("#")]),e._v(" Town Claim")]),e._v(" "),a("p",[e._v("A town claim has the following capabilities")]),e._v(" "),a("ul",[a("li",[e._v("32x32 size restriction in 2D mode. 32x32x32 size restriction in 3D mode.")]),e._v(" "),a("li",[e._v("Requires claim blocks.")]),e._v(" "),a("li",[e._v("Supports basic claims inside.")]),e._v(" "),a("li",[e._v("A creation limit of 1 which means you can only create 1 town by default."),a("br"),e._v("\nNote: This can be adjusted by changing "),a("code",[e._v("griefdefender.create-limit")]),e._v(" to a value higher than 1 with "),a("code",[e._v("gd_claim_default=town")]),e._v(" context.")])]),e._v(" "),a("p",[e._v("Note: For a player to claim chunks they need the permissions and enough claim-blocks for the size of their claim which can be configured with "),a("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Options"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("See https://github.com/bloodmc/GriefDefender/wiki/Claim-Types for more information on each claim type.")]),e._v(" "),a("h3",{attrs:{id:"golden-shovel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golden-shovel"}},[e._v("#")]),e._v(" Golden Shovel")]),e._v(" "),a("p",[e._v("You create claims with a golden shovel (item can be changed in the configs), which can also change claim size and position. Remember there are commands to switch claim type and mode, "),a("code",[e._v("/adminclaims")]),e._v(", "),a("code",[e._v("/townclaims")]),e._v(", "),a("code",[e._v("/basicclaims")]),e._v(", "),a("code",[e._v("/subdivideclaims")]),e._v("!")]),e._v(" "),a("ul",[a("li",[e._v("Creating a new claim: Right click at two points to mark the corners")]),e._v(" "),a("li",[e._v("Resizing a claim: Right click once in an existing claim to see the markers. Right click on a corner block and then again on a different position to move that corner.")]),e._v(" "),a("li",[e._v("Cancelling operations: Putting away a golden shovel without completing an operation cancels all actions")])]),e._v(" "),a("p",[e._v("The shovel can also be used to subdivide a basic. To switch to that mode, use "),a("code",[e._v("/claimsubdivide")]),e._v(". All three main claim types support direct child claims (subdivisions) - Town, Admin and Basic.")]),e._v(" "),a("h3",{attrs:{id:"wooden-stick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wooden-stick"}},[e._v("#")]),e._v(" Wooden stick")]),e._v(" "),a("p",[e._v("Basic tool, you can use it to indicate the position of claims, and identify who the owners of the claims are.")]),e._v(" "),a("ul",[a("li",[e._v("Right clicking shows existing claim locations")]),e._v(" "),a("li",[e._v("Shift right clicking searches for all claims in a 100 block radius and shows their location")]),e._v(" "),a("li",[e._v("Left clicking hides the markers")])]),e._v(" "),a("h2",{attrs:{id:"claim-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claim-settings"}},[e._v("#")]),e._v(" Claim Settings")]),e._v(" "),a("p",[e._v("To get general information about claims use "),a("code",[e._v("/claiminfo")]),e._v(" while standing in them. Hover over things to find various details you can change directly without entering any commands.\nThere are also commands to change the claim name, greeting, and farewell.")]),e._v(" "),a("h2",{attrs:{id:"claim-entry-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claim-entry-control"}},[e._v("#")]),e._v(" Claim Entry Control")]),e._v(" "),a("h3",{attrs:{id:"allowing-other-players-to-access-your-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowing-other-players-to-access-your-claim"}},[e._v("#")]),e._v(" Allowing other players to access your claim")]),e._v(" "),a("p",[e._v("You can give other players access to your basic claim using the "),a("a",{attrs:{href:"https://github.com/bloodmc/GriefDefender/wiki/Commands#trust",target:"_blank",rel:"noopener noreferrer"}},[e._v("trust commands"),a("OutboundLink")],1),e._v(', e.g. to give your friend "Applehead" building permissions to your claim just run '),a("code",[e._v("/trust Applehead")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"require-trust-for-players-to-enter-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-trust-for-players-to-enter-claim"}},[e._v("#")]),e._v(" Require trust for players to enter claim")]),e._v(" "),a("p",[e._v("Toggle the user flag definition "),a("code",[e._v("player-enter")]),e._v(" to "),a("code",[e._v("false")])]),e._v(" "),a("p",[e._v("Once the above is done, non-trusted players will not be able to enter your claim.")]),e._v(" "),a("p",[e._v("To allow entry for all users\n"),a("code",[e._v("/at public")])]),e._v(" "),a("p",[e._v("To allow entry for a single user\n"),a("code",[e._v("/at <playername>")])]),e._v(" "),a("p",[e._v("To remove entry for all users\n"),a("code",[e._v("/untrust public")])]),e._v(" "),a("p",[e._v("To remove entry for a specific user\n"),a("code",[e._v("/untrust <playername>")])]),e._v(" "),a("h2",{attrs:{id:"how-to-disable-claiming-gd-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-claiming-gd-functionality"}},[e._v("#")]),e._v(" How to disable claiming/GD functionality")]),e._v(" "),a("h3",{attrs:{id:"disable-claiming-in-a-specific-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-claiming-in-a-specific-world"}},[e._v("#")]),e._v(" Disable claiming in a specific world")]),e._v(" "),a("p",[e._v("To disable creating claims for a specific group of users in a world called "),a("code",[e._v("valhalla")]),e._v(", enter the following command"),a("br"),e._v(" "),a("code",[e._v("/lp group <group> permission set griefdefender.user.claim.create.* false world=valhalla")])]),e._v(" "),a("h3",{attrs:{id:"disable-gd-in-a-specific-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-gd-in-a-specific-world"}},[e._v("#")]),e._v(" Disable GD in a specific world")]),e._v(" "),a("p",[e._v("To disable GD functionality in an overworld world named "),a("code",[e._v("valhalla")]),e._v(", go to GD config folder then to "),a("code",[e._v("worlds")])]),e._v(" "),a("p",[e._v("You will see the following folders")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nether\nnormal\nthe_end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Since the world "),a("code",[e._v("valhalla")]),e._v(" is of type "),a("code",[e._v("overworld")]),e._v(" , go into "),a("code",[e._v("normal")]),e._v(" folder. You will see a folder named "),a("code",[e._v("valhalla")]),e._v(".\nInside this folder will be a config folder named "),a("code",[e._v("world.conf")]),e._v(". Edit the config file to be the following")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 1.2.7\n# # If you need help with the configuration or have any issues related to GriefDefender,\n# # create a ticket on https://github.com/bloodmc/GriefDefender/issues.\n# # Note: If you have not purchased GriefDefender, please consider doing so to get \n# # exclusive access to Discord for prompt support.\n# \n\nGriefDefender {\n    claim {\n        # Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled)\n        claims-enabled=0\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h2",{attrs:{id:"how-to-handle-explosions-above-surface-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-handle-explosions-above-surface-level"}},[e._v("#")]),e._v(" How to handle explosions above surface level")]),e._v(" "),a("p",[e._v("Open up the global.conf found under "),a("code",[e._v("./plugins/griefdefender")]),e._v(" on Bukkit and "),a("code",[e._v("./config/griefdefender")]),e._v(" on Sponge servers."),a("br"),e._v("\nYou will find the following config settings")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("explosion-block-surface-blacklist")]),e._v(" - Allows you to blacklist specific block source, such as tnt, above the surface level defined by setting "),a("code",[e._v("explosion-surface-block-level")]),e._v(". To blacklist ALL blocks, use the id "),a("code",[e._v("any")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("explosion-entity-surface-blacklist")]),e._v(" - Allows you to blacklist specific entity explosion sources, such as creeper, above the surface level defined by setting "),a("code",[e._v("explosion-surface-block-level")]),e._v(". To blacklist ALL entities, use the id "),a("code",[e._v("any")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("explosion-surface-block-level")]),e._v(" - Allows you to configure the block surface level (Y coord) that GriefDefender will use to determine if an explosion is above the surface. (Default: 63)"),a("br"),e._v("\nNote: You can configure these settings per world by copying the setting to your respective "),a("code",[e._v("world.conf")]),e._v(" file.")])]),e._v(" "),a("h2",{attrs:{id:"how-to-override-default-min-max-world-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-override-default-min-max-world-height"}},[e._v("#")]),e._v(" How to override default min/max world height")]),e._v(" "),a("p",[e._v("To override a world named "),a("code",[e._v("valhalla")]),e._v(" with environment type "),a("code",[e._v("overworld")]),e._v(", the following config changes need to be made")]),e._v(" "),a("h4",{attrs:{id:"bukkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bukkit"}},[e._v("#")]),e._v(" Bukkit")]),e._v(" "),a("ul",[a("li",[e._v("Locate world.conf in "),a("code",[e._v("./plugins/GriefDefender/worlds/normal/valhalla/world.conf")])]),e._v(" "),a("li",[e._v("Copy claim create settings from "),a("code",[e._v("global.conf")]),e._v(" to new world.conf")]),e._v(" "),a("li",[e._v("Open "),a("code",[e._v("./plugins/GriefDefender/options.conf")])]),e._v(" "),a("li",[e._v("Under "),a("code",[e._v("default-user-options")]),e._v(" set "),a("code",[e._v("min-level")]),e._v(" to match override setting")]),e._v(" "),a("li",[e._v("Under "),a("code",[e._v("default-user-options")]),e._v(" set "),a("code",[e._v("max-level")]),e._v(" to match override setting")])]),e._v(" "),a("h4",{attrs:{id:"sponge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sponge"}},[e._v("#")]),e._v(" Sponge")]),e._v(" "),a("ul",[a("li",[e._v("Locate world.conf in "),a("code",[e._v("./config/GriefDefender/worlds/overworld/valhalla/world.conf")])]),e._v(" "),a("li",[e._v("Copy claim create settings from "),a("code",[e._v("global.conf")]),e._v(" to new world.conf")]),e._v(" "),a("li",[e._v("Open "),a("code",[e._v("./config/GriefDefender/options.conf")])]),e._v(" "),a("li",[e._v("Under "),a("code",[e._v("default-user-options")]),e._v(" set "),a("code",[e._v("min-level")]),e._v(" to match override setting")]),e._v(" "),a("li",[e._v("Under "),a("code",[e._v("default-user-options")]),e._v(" set "),a("code",[e._v("max-level")]),e._v(" to match override setting")])]),e._v(" "),a("p",[e._v("If done right, it should look similar to")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GriefDefender {\n    claim {\n        creation-settings {\n            # Whether claims can expire by default. (Default: True)\n            expirable=true\n            # Whether claims should inherit their parent on creation. (Default: True)\n            # Note: This setting does not affect a claim whose parent is a town.\n            inherit-parent=true\n            # The maximum world height override used during claim creation.\n            # Note: Requires 'override-world-height' to be enabled.\n            max-world-height-override=319\n            # The minimum world height override used during claim creation.\n            # Note: Requires 'override-world-height' to be enabled.\n            min-world-height-override=-64\n            # Whether claim heights are taken from config instead of world. (Default: False)\n            # Note: Enable this setting if using custom datapack that alters the default world height.\n            override-world-height=true\n            # Whether claims requires claim blocks on creation. (Default: True)\n            requires-claim-blocks=true\n            # Whether claims can be resized on creation. (Default: True)\n            resizable=true\n            # Whether claims can show deny messages to players by default. (Default: True)\n            show-deny-messages=true\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("p",[e._v("Note: These settings will only work for newly created claims. If the world has already been created, make sure to adjust the wilderness claim data with appropriate height.")]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[a("strong",[e._v("1. How do allow all users to create claims for free?")])]),e._v(" "),a("p",[e._v("Set meta "),a("code",[e._v("griefdefender.initial-blocks")]),e._v(" to a high value such as "),a("code",[e._v("999999999")]),e._v(". See https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#luckperms. You should also disable "),a("code",[e._v("claim-block-task")]),e._v(" under claim category in "),a("code",[e._v("global.conf")]),e._v(" so players do not accrue claim blocks.")]),e._v(" "),a("p",[a("strong",[e._v("2. How do I transfer a claim to another player for free?")])]),e._v(" "),a("p",[e._v("Create claim, use "),a("code",[e._v("/claiminfo")]),e._v(" -> "),a("code",[e._v("Admin Settings")]),e._v(" and toggle "),a("code",[e._v("Requires Claim Blocks")]),e._v(" to false. Then use "),a("code",[e._v("/claimtransfer <playername>")]),e._v(" to transfer claim to player.")]),e._v(" "),a("p",[a("strong",[e._v("3. How do I create a claim using WorldEdit?")])]),e._v(" "),a("p",[e._v("First make sure your wand is set for cuboid mode as GD only supports cuboid. Use the wand to select your 2 points. If you want to create a 2D claim from bedrock to sky then type "),a("code",[e._v("/claimwe")]),e._v(". If you want to create a 3D claim that respect the height of your selection then type "),a("code",[e._v("/cuboid")]),e._v(" then "),a("code",[e._v("/claimwe")]),e._v(". Using "),a("code",[e._v("/cuboid")]),e._v(" will put you into 3D claiming mode where your selection will always respect block height.")]),e._v(" "),a("p",[a("strong",[e._v("4. How do I make use of WECUI visuals with GD claims?")])]),e._v(" "),a("p",[e._v("Make sure you use the investigation tool (minecraft:stick by default) or are in "),a("code",[e._v("/claimmode")]),e._v(" then right-click an area.")]),e._v(" "),a("p",[a("strong",[e._v("5. How do I allow everyone to access my spawn?")])]),e._v(" "),a("p",[e._v("Give them accessor trust by using "),a("code",[e._v("/at public")]),e._v(" where public represents all players.  See https://github.com/bloodmc/GriefDefender/wiki/Trust-System.  If you need more detailed protection then use the flag system. See https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI")]),e._v(" "),a("p",[a("strong",[e._v("6. How do I select a specific claim to work in? (change settings, etc..)")])]),e._v(" "),a("p",[e._v("Most GD commands will use the claim you are standing in. Simply stand in the claim and make your change. If the claim is far, use "),a("code",[e._v("/claimlist")]),e._v(" and TP to it.")]),e._v(" "),a("p",[a("strong",[e._v("7. How do I test flags as a non-trusted user in a claim?")])]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("/cfdebug")]),e._v(" to put yourself into claim flag debug mode then perform any action. This will internally set you as a non-trusted player for all claims. When done, simply run "),a("code",[e._v("/cfdebug")]),e._v(" command again.")]),e._v(" "),a("p",[a("strong",[e._v("8. Is there a way to allow a permission within all claims but deny it in the wild?")])]),e._v(" "),a("ul",[a("li",[e._v("To deny a specific player permission in wilderness")])]),e._v(" "),a("ol",[a("li",[e._v("Assign permission to all players in LuckPerms.")]),e._v(" "),a("li",[e._v("Stand in wilderness claim.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cpp <playername> <permission> false")])])]),e._v(" "),a("ul",[a("li",[e._v("To deny a specific group permission in wilderness")])]),e._v(" "),a("ol",[a("li",[e._v("Assign permission to all players in LuckPerms.")]),e._v(" "),a("li",[e._v("Stand in wilderness claim.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cpg <group> <permission> false")])])]),e._v(" "),a("p",[e._v("Note: The same steps can be applied to any claim.")]),e._v(" "),a("p",[a("strong",[e._v("9. How do I stop a player from executing a command in a claim like "),a("code",[e._v("/sethome")]),e._v(" ?")])]),e._v(" "),a("ul",[a("li",[e._v("Deny the permission on a group in claim.")])]),e._v(" "),a("ol",[a("li",[e._v("Stand in claim where you want to deny the permission.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cpg <group> <permission> false")]),a("br"),e._v("\nex. To deny the permission "),a("code",[e._v("essentials.sethome")]),e._v(" for group "),a("code",[e._v("default")]),a("br"),e._v(" "),a("code",[e._v("/cpg default essentials.sethome false")])])]),e._v(" "),a("ul",[a("li",[e._v("Deny the permission on a single player in claim.")])]),e._v(" "),a("ol",[a("li",[e._v("Stand in claim where you want to deny the permission.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cpp <playername> <permission> false")]),a("br"),e._v("\nex. To deny the permission "),a("code",[e._v("essentials.sethome")]),e._v(" for player "),a("code",[e._v("Mike")]),a("br"),e._v(" "),a("code",[e._v("/cpp Mike essentials.sethome false")])])]),e._v(" "),a("p",[e._v("OR")]),e._v(" "),a("ul",[a("li",[e._v("Deny the command-execute flag on a group in claim.")])]),e._v(" "),a("ol",[a("li",[e._v("Stand in claim where you want to deny the "),a("code",[e._v("command-execute")]),e._v(" flag.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cfg <group> command-execute <pluginid:command[arg]> false")]),a("br"),e._v("\nex. To deny the essentials command "),a("code",[e._v("/sethome")]),e._v(" for group "),a("code",[e._v("default")]),a("br"),e._v(" "),a("code",[e._v("/cfg default command-execute essentials:sethome false")])])]),e._v(" "),a("ul",[a("li",[e._v("Deny the command-execute flag on a single player in claim.")])]),e._v(" "),a("ol",[a("li",[e._v("Stand in claim where you want to deny the "),a("code",[e._v("command-execute")]),e._v(" flag.")]),e._v(" "),a("li",[e._v("Execute command "),a("code",[e._v("/cfp <playername> command-execute <pluginid:command[arg]> false")]),a("br"),e._v("\nex. To deny the essentials command "),a("code",[e._v("/sethome")]),e._v(" for player "),a("code",[e._v("Mike")]),a("br"),e._v(" "),a("code",[e._v("/cfp Mike command-execute essentials:sethome false")])])]),e._v(" "),a("p",[e._v("Note: Use "),a("code",[e._v("/gddebug record claim")]),e._v(" to get the proper info for command."),a("br"),e._v("\nSee https://github.com/bloodmc/GriefDefender/wiki/Debugging for more info.")]),e._v(" "),a("p",[a("strong",[e._v("10. How do I allow my admins to bypass protection ?")])]),e._v(" "),a("p",[e._v("Grant them access to use the "),a("code",[e._v("/ignoreclaims")]),e._v(" command in order to toggle GriefDefender god-mode.")]),e._v(" "),a("p",[a("strong",[e._v("11. How do I allow essentials "),a("code",[e._v("/sethome")]),e._v(" in only claims users are trusted in?")])]),e._v(" "),a("p",[e._v("Run the command "),a("code",[e._v("/cf command-execute essentials:sethome false default=user")])]),e._v(" "),a("p",[a("strong",[e._v("12. How do I allow players to fly in their own claims?")])]),e._v(" "),a("ol",[a("li",[e._v("Deny flight globally in all claims by running command "),a("code",[e._v("/claimoption player-deny-flight true default=global")])]),e._v(" "),a("li",[e._v("Give players permission to use the "),a("code",[e._v("fly")]),e._v(" command.")]),e._v(" "),a("li",[e._v("Assign the permission "),a("code",[e._v("griefdefender.admin.option.perk.fly.owner")]),e._v(" to player or group.")])]),e._v(" "),a("p",[a("strong",[e._v("13. How do I give claim owners the ability to allow other players to fly in their claims?")])]),e._v(" "),a("ol",[a("li",[e._v("Admins need to assign all players the following perk permissions")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("griefdefender.admin.option.perk.fly.accessor\ngriefdefender.admin.option.perk.fly.builder\ngriefdefender.admin.option.perk.fly.container\ngriefdefender.admin.option.perk.fly.manager\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Note: Don't forget to run "),a("code",[e._v("/gdreload")]),e._v(" after changing permissions")]),e._v(" "),a("p",[e._v("These permissions allow the trusted player to fly in claims they are trusted to.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Have the claim owners trust players they wish to fly in their claims.")])])])}),[],!1,null,null,null);i.default=t.exports}}]);