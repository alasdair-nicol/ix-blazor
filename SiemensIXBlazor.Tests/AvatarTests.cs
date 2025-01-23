// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Bunit;
using Microsoft.AspNetCore.Components;
using SiemensIXBlazor.Components.Avatar;

namespace SiemensIXBlazor.Tests
{
    public class AvatarTests : TestContextBase
    {
        [Fact]
        public void AvatarRendersWithoutCrashing()
        {
            // Arrange
            var cut = RenderComponent<Avatar>(parameters => {
                parameters.Add(p => p.Extra, "testExtra");
                parameters.Add(p => p.Initials, "testInitials");
                parameters.Add(p => p.Image, "testImage");
                parameters.Add(p => p.Username, "testUsername");
                parameters.Add(p => p.ChildContent, (RenderFragment)(builder =>
                {
                    builder.OpenElement(0, "div");
                    builder.AddContent(1, "Test child content");
                    builder.CloseElement();
                }));
            });
        
            // Assert
            cut.MarkupMatches("<ix-avatar extra='testExtra' image='testImage' initials ='testInitials' username='testUsername'><div>Test child content</div></ix-avatar>");
        }
    }
}